<?php
    // usleep(500000);

    $data = [
        [
            'id_product' => 1,
            'title' => 'Iphone 5',
            'price' => 20000
        ],
        [
            'id_product' => 2,
            'title' => 'Iphone 6',
            'price' => 25000
        ],
        [
            'id_product' => 3,
            'title' => 'Iphone 7',
            'price' => 30000
        ]
    ];
    echo json_encode($data);
?>