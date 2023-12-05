#!/bin/bash
TEMPLATE_PATH="/Users/shadokan87"
TEMPLATE_FOLDER_NAME=".serverless-template"

function print_help() {
  echo "Usage: $0 [command]"
  echo ""
  echo "Commands:"
  echo "  create [function-name]  Create a new serverless function in current directory"
  echo "  list                    List all serverless functions"
  echo "  --help                  Display this help message"
}

function main() {
  if [ "$1" = "--help" ] || [ -z "$1" ]; then
    print_help
    exit 0
  fi

  if [ "$1" = "create" ]; then
    if [ -z "$2" ]; then
      echo "Error: No function name provided."
      exit 1
    fi
    FUNCTION_NAME=$2

    # Copy template
    cp -r "$TEMPLATE_PATH/$TEMPLATE_FOLDER_NAME" "$PWD/$FUNCTION_NAME"
    if [ $? -ne 0 ]; then
      echo "Error: Failed to copy template."
      exit 1
    fi

    # Function to convert snake-case to camelCase with the first letter in lowercase
    function toCamelCase() {
      echo $1 | tr '_' '-' | awk 'BEGIN{FS=OFS="-"} {for(i=1;i<=NF;i++) $i=(i==1?tolower(substr($i,1,1)):toupper(substr($i,1,1))) substr($i,2)} 1' | sed 's/-//g'
    }

    # Replace __FN__PACKAGE_NAME__ with the function name in package.json
    PACKAGE_NAME_FORMATTED=$(echo "$FUNCTION_NAME" | tr '[:upper:]' '[:lower:]' | sed -e 's/[^a-z0-9-]/-/g' -e 's/--*/-/g' -e 's/^-//' -e 's/-$//')
    sed -i '' "s/__FN__PACKAGE_NAME__/$PACKAGE_NAME_FORMATTED/g" "$PWD/$FUNCTION_NAME/package.json"
    if [ $? -ne 0 ]; then
      echo "Error: Failed to set function name in package.json."
      exit 1
    fi
    # Replace __FN_PROTO_NAME__ in src/index.ts and deploy.sh with the camelCase version of FUNCTION_NAME
    FUNCTION_NAME_CAMEL=$(toCamelCase "$FUNCTION_NAME")
    sed -i '' "s/__FN_PROTO_NAME__/$FUNCTION_NAME_CAMEL/g" "$PWD/$FUNCTION_NAME/src/index.ts"
    sed -i '' "s/__FN_PROTO_NAME__/$FUNCTION_NAME_CAMEL/g" "$PWD/$FUNCTION_NAME/package.json"
    sed -i '' "s/__FN_PROTO_NAME__/$FUNCTION_NAME_CAMEL/g" "$PWD/$FUNCTION_NAME/deploy.sh"
    sed -i '' "s/__FN__/$FUNCTION_NAME/g" "$PWD/$FUNCTION_NAME/src/index.ts"
    if [ $? -ne 0 ]; then
      echo "Error: Failed to set function prototype name in src/index.ts or deploy.sh."
      exit 1
    fi

    echo "$FUNCTION_NAME Created"
    # Initialize the project by installing dependencies and generating tsconfig
    echo "cd \"$FUNCTION_NAME\" && bun install && bun generateTsConfig"

  fi


  if [ "$1" = "list" ]; then
    files=$(rg --files-with-matches '__CF' .)
    for file in $files; do
      if [[ "${file##*/}" == "deploy.sh" ]]; then
        dirname "${file}" | xargs basename
      fi
    done
  fi
}

main "$@"



