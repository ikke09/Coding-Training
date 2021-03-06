require('dotenv').config();
const { argv } = require('yargs')
const fetch = require('node-fetch');

const apiKey = process.env.CODE_WARS_API_KEY;
if (!apiKey || apiKey === '') {
    console.error('API KEY required!');
    return;
}

if (!argv.id) {
    console.error('Code Kata ID required!');
    console.info('npm run cw -- --id=<id>');
    return;
}

const codeWarsUrl = `https://www.codewars.com/api/v1/code-challenges/${argv.id}?access_key=${apiKey}`;

fetch(codeWarsUrl)
    .then(res => res.json())
    .then(codeWarsData => {
        if (argv.full) {
            console.log(codeWarsData);
        } else {
            console.info('To see full informations provide the --full argument')
            console.log({
                id: codeWarsData.id,
                slug: codeWarsData.slug,
                url: codeWarsData.url
            });
        }
    })
    .catch(error => console.error(error));


