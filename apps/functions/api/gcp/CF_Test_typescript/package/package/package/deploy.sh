#!/bin/bash

for arg in "$@"
do
  case $arg in
    "--bundle")
      pnpm bundle
      break
      ;;
  esac
done

# gcloud functions deploy nodejs-http-function \
#   --gen2 \
#   --runtime=nodejs20 \
#   --region=$GCP_REGION \
#   --source=. \
#   --entry-point=hello \
#   --trigger-http \
#   --memory=256MB \
#   --max-instances=83 \
#   --allow-unauthenticated

gcloud functions deploy nodejs-http-function \
  --gen2 \
  --runtime=nodejs20 \
  --region=$GCP_REGION \
  --source gs://gcf-v2-sources-974733534410-europe-west3/CF_Test_typescript-1.0.0.zip \                                          
  --entry-point=hello \
  --env-vars-file .env.yaml \
  --trigger-http \
  --memory=256MB \
  --max-instances=83 \
  --allow-unauthenticated

  # gcloud functions deploy myCloudFunction \\
  # --source gs://some-bucket/myfunction.zip \\
  # --entry-point myMainFunction --env-vars-file .env.yaml \\
  # --runtime nodejs16 --trigger-topic MY_TOPIC