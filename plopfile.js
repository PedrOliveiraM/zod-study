/**
 * @param {import('plop').Plop} plop
 */
export default function plop(plop) {
  plop.setGenerator('component', {
    description: 'Generate a new component with schema',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.component.tsx',
        templateFile: 'src/templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.schema.ts',
        templateFile: 'src/templates/schema.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/index.ts',
        templateFile: 'src/templates/index.hbs',
      },
    ],
  });
}
