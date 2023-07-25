const colorPallete = [
  "#1abc9c",
  "#f2ca27",
  "#e67e22",
  "#1abc9c",
  "#2980b9",
  "#e74c3c",
  "#1abc9c",
];

for (let i = 0; i < 7; i++) {
    const stripe = document.createElement('div');
    $(stripe).css({
        width: "14.285%",
        'min-height': '10px',
        'display': 'block',
        'background-color': colorPallete[i]
    });
    $(".colorBorder").append(stripe);
}
