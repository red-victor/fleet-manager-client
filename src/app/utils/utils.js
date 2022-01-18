

const Text = {
    Shorten: (text) => text.length > 50 ? text.slice(0, 40) + "..." : text,
}

const utils = {
    Text,
}

export default utils;