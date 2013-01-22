#!/bin/bash
V8OPT="-nouse-idle-notification -expose-gc -max-old-space-size=8192 -max-new-space-size=2048"
TRACE="--trace_gc"
NODE="node"
$NODE $V8OPT $TRACE $1
