fn main() {
    let x = 5;
    // x = 6; -- immutable

    let mut y = 10;
    y = 5;

    // i8, u8, i16, u16, i32, u32, i64, u64, isize, usize
    // f32, f64
    
    let mut z: u32 = x + y;
    z += x * y;
    z -= x - y;
    z /= x / y;
    z = x % y;

    // bool: true/false
    let c = 'c';
    let d: char = 'd';

    // Tuples
    let t: (i32, f64, char) = (42, 6.12, 'j');
    let (n, m, k) = t;
    let (_, _, f) = t;
    t.0; t.1; t.2;

    // Arrays
    let arr = [1, 2, 3, 4, 5];
		let a0 = arr[0];
}
