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

gcloud functions deploy createApp \
  --gen2 \
  --runtime=nodejs20 \
  --region=$GCP_REGION \
  --source=. \
  --entry-point=createApp\
  --trigger-http \
  --memory=256MB \
  --max-instances=83 \
  --allow-unauthenticated