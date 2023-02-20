import { errorInfo } from "../common/info";

export default function e<T>(fn: (...args: any[]) => Promise<T>, showErrorAlert: boolean = true) {
	return function wrapped(..._args: any[]): Promise<[Error | null, T]> {
		return (fn.apply(this, arguments) as Promise<T>).then(
			(res: T) => {
				console.log(`[fetch result] - `, res);
				return [null, res] as [null, T];
			},
			(err: Error) => {
				if (showErrorAlert && !__SERVER__) {
					alert(errorInfo);
				}
				return [err, {}] as [Error, T];
			}
		);
	};
}
