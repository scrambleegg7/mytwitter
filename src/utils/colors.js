import {
    red,
    pink,
    purple,
    indigo,
    blue,
    teal,
    green,
    lightGreen,
    amber,
    orange,
    deepOrange,
    deepPurple,
    blueGrey,
} from '@material-ui/core/colors';

const colors = [
    red,
    pink,
    purple,
    indigo,
    blue,
    teal,
    green,
    lightGreen,
    amber,
    orange,
    deepOrange,
    deepPurple,
    blueGrey,
];

export default function colorFrom(string) {
    try {

        //console.log("entried color string: ", string);


        const index = string
            .toString()
            //.Number()
            //.split('')
            //.map(char => char.charCodeAt())
            //.reduce((sum, num) => sum + num, 0);

        console.log("entried color Index: ", index);

        //const colorIndex = index % colors.length;

        //console.log("final color Index: ", colorIndex);

        return colors[index][500];
    } catch (e) {
        // eslint-disable-next-line
        console.error(e);
        return blueGrey[500];
    }
}
