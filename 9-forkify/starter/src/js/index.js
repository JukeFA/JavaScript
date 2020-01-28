import Search from './models/Search'

/**Global state of the app
 * - Search object
 * - Current recipe object
 * - Liked recipes
 */
const state = {}

const controlSearch = async () => {
    // 1) Get query from view
    const query = 'pizza' //TODO

    if (query) {
        // 2) New search object and add it to state
        state.search = new Search(query)

        // 3) Prepare UI for results
        //TODO

        // 4) Search for recipes
        await state.search.getResults()

        // 5) Render results on UI
        console.log(state.search.result)
        //TODO
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault()
    controlSearch()
})