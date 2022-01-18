const serviceList = ['RCA', 'CASCO', 'ITP', 'Revision', 'Consumable', 'Other'];
const statusList = ['Unresolved', 'In Progress', 'Solved'];
const statusColorList = ['danger', 'warning', 'success'];

const Text = {
    Shorten: (text) => text.length > 50 ? text.slice(0, 40) + "..." : text,
}

const Services = {
    ServiceType: (index) => serviceList[index],
    Status: (index) => statusList[index],
    StatusColor: (index) => statusColorList[index],
}

const utils = {
    Text,
    Services,
}

export default utils;