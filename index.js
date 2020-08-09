#!/usr/bin/env node
const fetch = require("node-fetch");

const dependency = process.argv[2];

async function search(dependency) {
    let result = await fetch(`http://search.maven.org/solrsearch/select?rows=20&wt=json&q=${dependency}`);
    let json = await result.json();

    json.response.docs.forEach((doc) => {
        console.log(`${doc.id} ${doc.latestVersion}`)
    });
}

search(dependency);