const person_width = 100;
const person_height = 60;
const person_x = 80;
const person_y = 100;

function person(row, column, name, message) {
    rect(row, column);
    text_name(row, column, name);
    text_attr(row, column, message);
}

function marriage(row, column_1, column_2) {
    line(person_right_x(column_1),
        marriage_y(row),
        person_left_x(column_2),
        marriage_y(row));
}

function child(row_1, column_1, row_2, column_2) {
    child_line(row_1, column_1, row_2, column_2, marriage_y(row_1))
}

function child_single_parent(row_1, column_1, row_2, column_2) {
    child_line(row_1, column_1, row_2, column_2, person_bottom_y(row_1))
}

function child_line(row_1, column_1, row_2, column_2, start_y) {
    line(person_center_x(column_1),
        start_y,
        person_center_x(column_1),
        child_branch_y(row_2));
    line(person_center_x(column_1),
        child_branch_y(row_2),
        person_center_x(column_2),
        child_branch_y(row_2));
    line(person_center_x(column_2),
        child_branch_y(row_2),
        person_center_x(column_2),
        person_top_y(row_2));
}

function person_right_x(column) {
    return column * person_x + person_width;
}

function person_left_x(column) {
    return column * person_x;
}

function person_top_y(row) {
    return (row) * person_y;
}

function person_bottom_y(row) {
    return (row) * person_y + person_height;
}

function person_center_x(column) {
    return person_left_x(column) + person_width / 2;
}

function marriage_y(row) {
    return row * person_y + (person_height / 2);
}

function child_branch_y(row) {
    return person_top_y(row) - (person_y - person_height) / 2;
}

function rect(row, column) {
    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', column * person_x);
    rect.setAttribute('y', row * person_y);
    rect.setAttribute('width', person_width);
    rect.setAttribute('height', person_height);
    rect.setAttribute('rx', 10);
    rect.setAttribute('ry', 10);
    rect.setAttribute('fill', '#EEE');
    document.querySelector('svg.family_tree').appendChild(rect);
}

function line(x1, y1, x2, y2) {
    let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('fill', 'none');
    line.setAttribute('stroke', '#000');
    line.setAttribute('stroke-linejoin', 'round');
    line.setAttribute('stroke-width', '1');
    document.querySelector('svg.family_tree').appendChild(line);
}

function text_name(row, column, name) {
    let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', column * person_x + person_width / 2);
    text.setAttribute('y', row * person_y + person_height / 2);
    text.setAttribute('fill', '#000');
    text.setAttribute('stroke', 'none');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'central');
    text.innerHTML = name;
    document.querySelector('svg.family_tree').appendChild(text);
}

function text_attr(row, column, message) {
    let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', column * person_x);
    text.setAttribute('y', row * person_y + person_height);
    text.setAttribute('font-size', 12);
    text.setAttribute('fill', '#000');
    text.setAttribute('stroke', 'none');
    text.setAttribute('dominant-baseline', 'text-before-edge');
    text.innerHTML = message;
    document.querySelector('svg.family_tree').appendChild(text);
}