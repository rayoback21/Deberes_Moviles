

function isLeap(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

function LeapYearChecker() {
    const year = 2024; 
    const isLeapYear = isLeap(year);
    const message = isLeapYear ? 'Sí' : 'No';

    return (
        <div>
            <p>¿Es el año {year} bisiesto? {message}</p>
        </div>
    );
}

export default LeapYearChecker;
