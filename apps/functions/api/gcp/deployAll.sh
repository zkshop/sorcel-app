#!/bin/bash
bundle=false

for arg in "$@"
do
  case $arg in
    "--bundle")
      bundle=true
      ;;
  esac
done

for dir in CF_*; do
  if [[ -d "$dir" ]]; then
    echo -e "\033[0;34mDeploying $dir...\033[0m"
    # Change to the directory of the service
    pushd "$dir" > /dev/null  # Suppress pushd output
    if $bundle; then
      ./deploy.sh --bundle
    else
      ./deploy.sh
    fi
    # Return to the original directory
    popd > /dev/null  # Suppress popd output
  fi
done