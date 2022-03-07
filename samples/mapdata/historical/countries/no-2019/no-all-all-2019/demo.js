(async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/historical/countries/no-2019/no-all-all-2019.topo.json'
    ).then(response => response.json());

    // Prepare demo data. The data is joined to map using value of 'hc-key'
    // property by default. See API docs for 'joinBy' for more info on linking
    // data and map.
    const data = [
        ['no-tr-1943', 10], ['no-tr-1941', 11], ['no-ho-1244', 12],
        ['no-tr-1902', 13], ['no-nt-1755', 14], ['no-nt-1750', 15],
        ['no-mr-1576', 16], ['no-no-1837', 17], ['no-no-1834', 18],
        ['no-no-1835', 19], ['no-no-1838', 20], ['no-fi-2018', 21],
        ['no-fi-2014', 22], ['no-nt-1719', 23], ['no-st-1630', 24],
        ['no-sf-1439', 25], ['no-va-1004', 26], ['no-fi-2020', 27],
        ['no-st-1617', 28], ['no-ro-1142', 29], ['no-ro-1141', 30],
        ['no-ro-1145', 31], ['no-ho-1265', 32], ['no-mr-1546', 33],
        ['no-mr-1547', 34], ['no-mr-1545', 35], ['no-no-1828', 36],
        ['no-no-1820', 37], ['no-tr-1926', 38], ['no-no-1848', 39],
        ['no-no-1865', 40], ['no-no-1868', 41], ['no-mr-1515', 42],
        ['no-no-1815', 43], ['no-no-1816', 44], ['no-no-1813', 45],
        ['no-no-1818', 46], ['no-mr-1532', 47], ['no-mr-1531', 48],
        ['no-ro-1151', 49], ['no-sf-1411', 50], ['no-sf-1412', 51],
        ['no-of-111', 52], ['no-no-1856', 53], ['no-no-1857', 54],
        ['no-ho-1259', 55], ['no-tr-1936', 56], ['no-nt-1748', 57],
        ['no-vf-723', 58], ['no-no-1804', 59], ['no-vf-716', 60],
        ['no-no-1845', 61], ['no-he-432', 62], ['no-ho-1247', 63],
        ['no-no-1870', 64], ['no-tr-1917', 65], ['no-nt-1721', 66],
        ['no-no-1866', 67], ['no-sf-1413', 68], ['no-mr-1519', 69],
        ['no-mr-1520', 70], ['no-nt-1739', 71], ['no-nt-1714', 72],
        ['no-st-1663', 73], ['no-fi-2004', 74], ['no-vf-706', 75],
        ['no-ro-1144', 76], ['no-of-118', 77], ['no-of-101', 78],
        ['no-no-1849', 79], ['no-st-1621', 80], ['no-st-1627', 81],
        ['no-no-1836', 82], ['no-vf-701', 83], ['no-va-1037', 84],
        ['no-ho-1221', 85], ['no-vf-722', 86], ['no-sf-1428', 87],
        ['no-mr-1514', 88], ['no-no-1812', 89], ['no-te-819', 90],
        ['no-te-806', 91], ['no-ak-214', 92], ['no-ak-215', 93],
        ['no-of-138', 94], ['no-no-1850', 95], ['no-no-1854', 96],
        ['no-tr-1942', 97], ['no-tr-1940', 98], ['no-te-814', 99],
        ['no-te-815', 100], ['no-te-817', 101], ['no-ro-1149', 102],
        ['no-mr-1566', 103], ['no-ho-1251', 104], ['no-vf-711', 105],
        ['no-nt-1702', 106], ['no-nt-1724', 107], ['no-nt-1703', 108],
        ['no-aa-911', 109], ['no-aa-912', 110], ['no-ro-1129', 111],
        ['no-ro-1122', 112], ['no-ro-1120', 113], ['no-ro-1124', 114],
        ['no-ro-1127', 115], ['no-va-1018', 116], ['no-va-1017', 117],
        ['no-ho-1234', 118], ['no-ho-1231', 119], ['no-ho-1238', 120],
        ['no-ho-1232', 121], ['no-ho-1233', 122], ['no-ho-1235', 123],
        ['no-ho-1241', 124], ['no-of-104', 125], ['no-of-105', 126],
        ['no-aa-901', 127], ['no-aa-906', 128], ['no-aa-904', 129],
        ['no-no-1841', 130], ['no-no-1840', 131], ['no-ho-1243', 132],
        ['no-ho-1245', 133], ['no-ho-1246', 134], ['no-he-441', 135],
        ['no-he-437', 136], ['no-he-436', 137], ['no-he-434', 138],
        ['no-he-428', 139], ['no-mr-1539', 140], ['no-mr-1524', 141],
        ['no-mr-1526', 142], ['no-st-1622', 143], ['no-st-1624', 144],
        ['no-aa-919', 145], ['no-op-529', 146], ['no-ak-239', 147],
        ['no-ak-238', 148], ['no-ak-234', 149], ['no-ak-235', 150],
        ['no-he-420', 151], ['no-ak-236', 152], ['no-op-528', 153],
        ['no-ak-237', 154], ['no-he-426', 155], ['no-ak-233', 156],
        ['no-ak-231', 157], ['no-ak-230', 158], ['no-nt-1756', 159],
        ['no-nt-1751', 160], ['no-bu-625', 161], ['no-vf-714', 162],
        ['no-op-512', 163], ['no-va-1003', 164], ['no-op-514', 165],
        ['no-va-1001', 166], ['no-aa-928', 167], ['no-mr-1571', 168],
        ['no-ho-1227', 169], ['no-bu-620', 170], ['no-of-137', 171],
        ['no-of-136', 172], ['no-of-135', 173], ['no-bu-627', 174],
        ['no-ho-1222', 175], ['no-ho-1219', 176], ['no-no-1832', 177],
        ['no-no-1833', 178], ['no-no-1839', 179], ['no-fi-2019', 180],
        ['no-fi-2015', 181], ['no-fi-2017', 182], ['no-tr-2012', 183],
        ['no-te-830', 184], ['no-te-829', 185], ['no-te-826', 186],
        ['no-te-828', 187], ['no-te-807', 188], ['no-te-822', 189],
        ['no-vf-704', 190], ['no-vf-713', 191], ['no-vf-702', 192],
        ['no-bu-616', 193], ['no-bu-619', 194], ['no-nt-1711', 195],
        ['no-nt-1717', 196], ['no-st-1653', 197], ['no-st-1657', 198],
        ['no-ro-1133', 199], ['no-ro-1134', 200], ['no-ro-1130', 201],
        ['no-ro-1135', 202], ['no-st-1664', 203], ['no-st-1665', 204],
        ['no-st-1644', 205], ['no-st-1648', 206], ['no-sf-1432', 207],
        ['no-sf-1433', 208], ['no-sf-1430', 209], ['no-sf-1431', 210],
        ['no-op-519', 211], ['no-op-517', 212], ['no-bu-615', 213],
        ['no-op-540', 214], ['no-bu-622', 215], ['no-bu-623', 216],
        ['no-bu-621', 217], ['no-ho-1224', 218], ['no-ho-1228', 219],
        ['no-ho-1223', 220], ['no-bu-626', 221], ['no-bu-612', 222],
        ['no-bu-624', 223], ['no-bu-628', 224], ['no-no-1871', 225],
        ['no-mr-1502', 226], ['no-mr-1548', 227], ['no-mr-1504', 228],
        ['no-mr-1505', 229], ['no-fi-2027', 230], ['no-fi-2025', 231],
        ['no-aa-941', 232], ['no-st-1612', 233], ['no-mr-1567', 234],
        ['no-st-1613', 235], ['no-st-1638', 236], ['no-va-1046', 237],
        ['no-ro-1146', 238], ['no-ho-1263', 239], ['no-ho-1260', 240],
        ['no-ho-1266', 241], ['no-ho-1264', 242], ['no-mr-1543', 243],
        ['no-mr-1551', 244], ['no-op-522', 245], ['no-op-542', 246],
        ['no-bu-617', 247], ['no-op-543', 248], ['no-op-515', 249],
        ['no-op-544', 250], ['no-op-516', 251], ['no-op-545', 252],
        ['no-op-520', 253], ['no-of-122', 254], ['no-of-123', 255],
        ['no-of-124', 256], ['no-of-125', 257], ['no-of-127', 258],
        ['no-of-128', 259], ['no-no-1824', 260], ['no-no-1822', 261],
        ['no-va-1014', 262], ['no-he-429', 263], ['no-he-415', 264],
        ['no-he-417', 265], ['no-he-425', 266], ['no-op-521', 267],
        ['no-he-412', 268], ['no-he-418', 269], ['no-he-419', 270],
        ['no-aa-926', 271], ['no-no-1805', 272], ['no-tr-1920', 273],
        ['no-tr-1922', 274], ['no-tr-1923', 275], ['no-tr-1925', 276],
        ['no-tr-1927', 277], ['no-tr-1929', 278], ['no-te-833', 279],
        ['no-aa-940', 280], ['no-ho-1252', 281], ['no-st-1640', 282],
        ['no-nt-1718', 283], ['no-nt-1725', 284], ['no-nt-1749', 285],
        ['no-sf-1420', 286], ['no-sf-1422', 287], ['no-bu-618', 288],
        ['no-sf-1424', 289], ['no-sf-1426', 290], ['no-sf-1429', 291],
        ['no-va-1032', 292], ['no-he-403', 293], ['no-op-502', 294],
        ['no-va-1034', 295], ['no-bu-631', 296], ['no-bu-633', 297],
        ['no-ho-1216', 298], ['no-no-1860', 299], ['no-no-1867', 300],
        ['no-aa-937', 301], ['no-va-938', 302], ['no-aa-929', 303],
        ['no-aa-935', 304], ['no-ro-1106', 305], ['no-ro-1102', 306],
        ['no-ro-1121', 307], ['no-ro-1114', 308], ['no-ro-1103', 309],
        ['no-ro-1101', 310], ['no-mr-1517', 311], ['no-mr-1516', 312],
        ['no-mr-1511', 313], ['no-no-1825', 314], ['no-no-1811', 315],
        ['no-mr-1534', 316], ['no-mr-1535', 317], ['no-ho-1242', 318],
        ['no-he-439', 319], ['no-st-1601', 320], ['no-he-430', 321],
        ['no-te-805', 322], ['no-te-811', 323], ['no-ak-216', 324],
        ['no-ak-217', 325], ['no-ak-213', 326], ['no-ak-229', 327],
        ['no-ak-211', 328], ['no-os-219', 329], ['no-sf-1444', 330],
        ['no-mr-1554', 331], ['no-mr-1557', 332], ['no-sf-1418', 333],
        ['no-sf-1419', 334], ['no-op-534', 335], ['no-op-533', 336],
        ['no-sf-1416', 337], ['no-sf-1417', 338], ['no-sf-1421', 339],
        ['no-of-121', 340], ['no-of-119', 341], ['no-no-1859', 342],
        ['no-op-536', 343], ['no-bu-605', 344], ['no-no-1851', 345],
        ['no-no-1852', 346], ['no-tr-1903', 347], ['no-tr-1913', 348],
        ['no-no-1853', 349], ['no-op-513', 350], ['no-mr-1525', 351],
        ['no-sf-1449', 352], ['no-ho-1253', 353], ['no-mr-1523', 354],
        ['no-aa-914', 355], ['no-he-423', 356], ['no-mr-1528', 357],
        ['no-mr-1529', 358], ['no-os-301', 359], ['no-tr-1931', 360],
        ['no-tr-1924', 361], ['no-tr-1939', 362], ['no-tr-1938', 363],
        ['no-op-538', 364], ['no-op-501', 365], ['no-nt-1742', 366],
        ['no-nt-1738', 367], ['no-st-1632', 368], ['no-st-1634', 369],
        ['no-st-1636', 370], ['no-ak-228', 371], ['no-ak-227', 372],
        ['no-ak-226', 373], ['no-ak-221', 374], ['no-os-220', 375],
        ['no-va-1027', 376], ['no-va-1026', 377], ['no-va-1021', 378],
        ['no-va-1002', 379], ['no-va-1029', 380], ['no-vf-720', 381],
        ['no-nt-1744', 382], ['no-nt-1743', 383], ['no-vf-728', 384],
        ['no-vf-719', 385], ['no-bu-604', 386], ['no-ro-1160', 387],
        ['no-bu-602', 388], ['no-ho-1201', 389], ['no-ho-1211', 390],
        ['no-ro-1111', 391], ['no-sf-1445', 392], ['no-sf-1401', 393],
        ['no-sf-1438', 394], ['no-ro-1112', 395], ['no-sf-1443', 396],
        ['no-ro-1119', 397], ['no-mr-1563', 398], ['no-st-1635', 399],
        ['no-tr-1919', 400], ['no-of-106', 401], ['no-vf-709', 402],
        ['no-no-1874', 403], ['no-tr-1911', 404], ['no-fi-2021', 405],
        ['no-mr-1560', 406], ['no-tr-1933', 407], ['no-st-1633', 408],
        ['no-te-827', 409], ['no-te-821', 410], ['no-st-1662', 411],
        ['no-sf-1441', 412], ['no-op-511', 413], ['no-op-541', 414],
        ['no-no-1826', 415], ['no-te-831', 416], ['no-te-834', 417],
        ['no-bu-632', 418], ['no-he-402', 419], ['no-op-532', 420],
        ['no-he-427', 421], ['no-nt-1736', 422], ['no-nt-1740', 423],
        ['no-st-1620', 424], ['no-no-1827', 425], ['no-fi-2030', 426],
        ['no-fi-2002', 427], ['no-fi-2022', 428], ['no-tr-1928', 429],
        ['no-mr-1573', 430], ['no-fi-2011', 431], ['no-fi-2024', 432],
        ['no-fi-2023', 433], ['no-fi-2028', 434], ['no-fi-2003', 435],
        ['no-he-438', 436], [null, 437]
    ];

    // Create the chart
    Highcharts.mapChart('container', {
        chart: {
            map: topology
        },

        title: {
            text: 'Highcharts Maps basic demo'
        },

        subtitle: {
            text: 'Source map: <a href="http://code.highcharts.com/mapdata/historical/countries/no-2019/no-all-all-2019.topo.json">Norway, admin2 (2019)</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series: [{
            data: data,
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });

})();
