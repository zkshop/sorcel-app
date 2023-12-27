#!/bin/bash
# __CF

for arg in "$@"
do
  case $arg in
    "--bundle")
      pnpm bundle
      break
      ;;
  esac
done

gcloud functions deploy __FN__ \
  --gen2 \
  --runtime=nodejs20 \
  --region=$GCP_REGION \
  --source=. \
  --entry-point=__FN_PROTO_NAME__ \
  --trigger-http \
  --memory=256MB \
  --max-instances=83 \
  --allow-unauthenticated
