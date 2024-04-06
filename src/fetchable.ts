import { readable } from 'svelte/store'

export default function<T>(url: string, initial_value: T) {
	return readable<T>(initial_value, (set) => {
		fetch(url)
			.then(r => { if (r.ok) { return r.json() } else { throw r.status } })
			.then(json => set(json))
			.catch(err => console.error("Request failed: " + url))
	})
}