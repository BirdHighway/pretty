#!/usr/bin/env node

let data = '';

process.stdin.on('data', (chunk) => {
  data += chunk;
});

process.stdin.on('end', () => {
  processData(data);
});

const processData = (data) => {
  const json = JSON.parse(data);
  const output = JSON.stringify(json, null, 2);
  console.log(output);
};