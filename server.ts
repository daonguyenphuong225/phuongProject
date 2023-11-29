// import cliStart from 'next/dist/cli/next-start';
const cli= require('next/dist/cli/next-dev');
// cliStart.nextStart(['-p', process.env.PORT || 3000]);
console.log(process.env.PORT,323232);

cli.nextDev(['-p', process.env.PORT || 3000])