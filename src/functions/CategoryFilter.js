export const filterData = (e, projects, setSearchResults) => {
    setSearchResults(
        projects.filter(dataContainsTerm(e))
    );
  };

const dataContainsTerm = (term) => {
    return function (element) {
        let word = term?.toString().toLowerCase();
        let data = element;
        if (data.Category.toString().toLowerCase().includes(word) &&
            startsWith(data.Category.toString().toLowerCase(), word)) {
                return true;
        } 
        return false;
    };
};

function startsWith(str, word) {
    return str.lastIndexOf(word, 0) === 0;
}