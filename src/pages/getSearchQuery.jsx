// const API_DOMAIN = "api.deathnon.workers.dev/api";
const API_DOMAIN = "api.deathnon.com/api";
// check if string contains of numbers or numbers and plus sign
const checkIsTermAPhone = (term) =>
    (/^\d+$/.test(term) || (/^\+?\d+$/.test(term))) &&
    term.length <= 13 &&
    term.length >= 5;

const checkIsTermAName = (term) => /\s/g.test(term) && term.length < 100;
const checkIsTermAEmail = (term) => /\@/g.test(term) && /\./g.test(term) && term.length < 100;

// queryParam: "phone" | "name" | "email"
const getRequestString = (queryParam, term) =>
    `https://${API_DOMAIN}?${queryParam}=${term}`;

export const getSearchQuery = (term) => {
    if (checkIsTermAPhone(term)) {
        return getRequestString("phone", term);
    } else if (checkIsTermAName(term)) {
        return getRequestString("name", term);
    } else if (checkIsTermAEmail(term)) {
        return getRequestString("email", term);
    } else {
        return ``;
    }
};
