#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkMsgAppBackendStack } from '../lib/cdk-msg-app-backend-stack';

const app = new cdk.App();
new CdkMsgAppBackendStack(app, 'CdkMsgAppBackendStack');
