terraform {
    required_providers {
      aws = {
        source  = "hashicorp/aws"
        version = "5.27.0"
      }
    }
  }
  
  provider "aws" {
    region                  = "eu-west-3"
    access_key = "AKIAX4MT5W7VYQVK6BSJ"
    secret_key = "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"
  }

resource "aws_lambda_function" "hello_world" {
  function_name = "hello_world_function"

  s3_bucket = "sorcel-functions"
  s3_key    = "function.zip"

  handler = "index.handler"
  runtime = "nodejs18.x"

  role = aws_iam_role.lambda_exec.arn
}

resource "aws_iam_role" "lambda_exec" {
  name = "lambda_exec_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = "sts:AssumeRole",
        Effect = "Allow",
        Principal = {
          Service = "lambda.amazonaws.com"
        },
      },
    ]
  })
}

resource "aws_api_gateway_rest_api" "hello_world_api" {
  name        = "HelloWorldAPI"
  description = "API Gateway for HelloWorld Lambda Function"
}

resource "aws_api_gateway_resource" "hello_world_resource" {
  rest_api_id = aws_api_gateway_rest_api.hello_world_api.id
  parent_id   = aws_api_gateway_rest_api.hello_world_api.root_resource_id
  path_part   = "hello"
}

resource "aws_api_gateway_method" "hello_world_method" {
  rest_api_id   = aws_api_gateway_rest_api.hello_world_api.id
  resource_id   = aws_api_gateway_resource.hello_world_resource.id
  http_method   = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "hello_world_integration" {
  rest_api_id = aws_api_gateway_rest_api.hello_world_api.id
  resource_id = aws_api_gateway_resource.hello_world_resource.id
  http_method = aws_api_gateway_method.hello_world_method.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.hello_world.invoke_arn
}

resource "aws_api_gateway_deployment" "hello_world_deployment" {
  depends_on = [
    aws_api_gateway_integration.hello_world_integration,
  ]

  rest_api_id = aws_api_gateway_rest_api.hello_world_api.id
  stage_name  = "test"
}

resource "aws_cloudwatch_log_group" "hello" {
  name = "/aws/lambda/${aws_lambda_function.hello_world.function_name}"

  retention_in_days = 14
}

output "base_url" {
  value = aws_api_gateway_deployment.hello_world_deployment.invoke_url
}