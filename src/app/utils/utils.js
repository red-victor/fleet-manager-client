const serviceList = ['RCA', 'CASCO', 'ITP', 'Revision', 'Consumable', 'Other'];

const Text = {
    Shorten: (text) => text.length > 50 ? text.slice(0, 40) + "..." : text,
}

const Services = {
    ServiceType: (index) => serviceList[index],

}

const utils = {
    Text,
    Services,
}

export default utils;