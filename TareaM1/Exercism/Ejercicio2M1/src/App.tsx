export function shirt(name = 'you'): string {
    return `a shirt ${name} for Bryan, a Nike shirt for Kevin.`;
}

function ShirtComponent() {
    const result = shirt(' Adiddas'); 
    return (
        <div>
            <p>{result}</p>
        </div>
    );
}

export default ShirtComponent;
