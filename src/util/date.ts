function pad( $n: number ): string{
	return ( "0" + $n ).substr( -2, 2 );
}

export function dateToStr( $utc: number ): string{
	const date = new Date( $utc );
	const dateStr = `${date.getUTCFullYear()}.${pad(date.getUTCMonth()+1)}.${pad(date.getUTCDate())} ${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())}`

	return dateStr;
}