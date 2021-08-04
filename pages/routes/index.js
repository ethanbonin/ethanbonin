// eslint-disable-next-line no-undef
const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const routes = {
    index: prefix + "/",
    about: prefix + "/about",
    projects: prefix +"/projects",
    history: prefix + "/history"
}

export default routes