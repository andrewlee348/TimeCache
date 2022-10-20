export default function Timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}