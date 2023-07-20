const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

function analyzeProject(projectPath) {
  const files = getFilesInDirectory(projectPath);
  const report = {
    projectStructure: files,
    components: [],
    hooks: [],
  };

  files.forEach((file) => {
    if (file.endsWith('.js') || file.endsWith('.jsx')) {
      const code = fs.readFileSync(file, 'utf-8');

      try {
        const ast = parser.parse(code, {
          sourceType: 'module',
          plugins: ['jsx'],
        });

        traverse(ast, {
          enter(path) {
            if (
              path.isIdentifier({ name: 'useState' }) ||
              path.isIdentifier({ name: 'useEffect' }) ||
              path.isIdentifier({ name: 'useContext' }) ||
              path.isIdentifier({ name: 'useReducer' })
            ) {
              report.hooks.push({
                file,
                hook: path.node.name,
              });
            }

            if (path.isArrowFunctionExpression() || path.isFunctionDeclaration()) {
              report.components.push({
                file,
                name: path.parent.id.name,
              });
            }
          },
        });
      } catch (error) {
        console.error('Error parsing file:', file);
      }
    }
  });

  fs.writeFileSync('project-report.json', JSON.stringify(report, null, 2));
}

function getFilesInDirectory(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach(function (file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesInDirectory(file));
    } else {
      results.push(file);
    }
  });

  return results;
}

analyzeProject('C:/Users/vs38731/Documents/GitHub/PSR-Dashboard/');  // replace with your project path
