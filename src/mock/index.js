import Mock from "mockjs";
Mock.mock('/api/home', {
    "homeList|5-10": [{
        id: "@id",
        img: "@image(100x100,@color)",
        title: "@ctitle"
    }]
})
Mock.mock('/api/list', {
    "leftList|10": [{
        id: "@id",
        title: "@ctitle",
        "children|10": [{
            id: "@id",
            img: "@image(100x100,@color)",
            title: "@ctitle"
        }]
    }]
})
Mock.mock('/api/discover', {
    "discover|5": [{
        id: "@id",
        img: "@image(100x100,@color)",
        title: "@ctitle"
    }]
})