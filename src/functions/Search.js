export const searchData = (e, projects, setSearchResults) => {
    setSearchResults(
        projects.filter(dataContainsTerm(e))
    );
  };

const dataContainsTerm = (term) => {
    return function (element) {
        let word = term?.toString().toLowerCase();
        let data = element;
        if (data.ExampleName.toString().toLowerCase().includes(word) &&
            startsWith(data.ExampleName.toString().toLowerCase(), word)) {
                return true;
        } else if (data.ExampleDescription.toString().toLowerCase().includes(word) || 
            startsWith(data.ExampleDescription.toString().toLowerCase(), word)) {
                return true;
        } 
        else if (data.CadenceExplainer.toString().toLowerCase().includes(word) || 
        startsWith(data.CadenceExplainer.toString().toLowerCase(), word)) {
            return true;
        }

        return false;
    };
};

function startsWith(str, word) {
    return str.lastIndexOf(word, 0) === 0;
}