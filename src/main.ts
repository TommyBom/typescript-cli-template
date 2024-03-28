import { program } from 'commander';

program.argument('example').option('-v, --verbose', 'Print verbose output');

program.parse();

(async () => {
  const example = program.args[0];
  const options = program.opts();
  const verbose = options['verbose'];

  if (verbose) {
    console.log('Well hello there world', example);
  } else {
    console.log('Hello world', example);
  }
})();
