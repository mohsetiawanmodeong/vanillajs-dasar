const anchestor = [
    {
        name: "Lukman",
        child: [
            {
                name: "Setiawan",
                child: [
                    {
                        name: "Uyo",
                    },
                    {
                        name: "Obay",
                    },
                    {
                        name: "Keni",
                        child: [
                            {
                                name: "Arjun",
                            },
                        ],
                    },
                    {
                        name: "Yein",
                    },
                ],
            },
            {
                name: "Sri",
                child: [
                    {
                        name: "Tisna",
                        child: [{ name: "Wira" }],
                    },
                    {
                        name: "Sofi",
                    },
                    {
                        name: "Ayu",
                    },
                ],
            },
        ],
    },
];

console.log(anchestor);

function renderAnchestor(node, depth = 0) {
    let inheritance = "",
        space = "";

    for (let i = 0; i < depth; i++) {
        inheritance += "-";
        space += " ";
    }

    node.forEach(function (item) {
        console.log(
            `${depth > 0 ? space + "└" + inheritance + "" : ""}${item.name}`
        );

        if (item.child) renderAnchestor(item.child, (depth += 1));
    });
}

renderAnchestor(anchestor, 0);