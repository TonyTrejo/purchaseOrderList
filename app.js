// Item Class: Represents an Item
class Items {
	constructor(unit, item, cost) {
		this.unit = unit;
		this.item = item;
		this.cost = cost;
	}
}

// UI CLass: Handle UI task
class UI {
	static displayItem() {
		const StoredItems = [
			{
				unit: 3,
				desc: "SheetRock",
				cost: 15
			},
			{
				unit: 2,
				desc: "Paint",
				cost: 12
			}
		];
		const items = StoredItems;

		items.forEach(item => UI.addItemToList(item));
	}

	static addItemToList(item) {
		const list = document.querySelector("#item-list");
		const row = document.createElement("tr");

		row.innerHTML = `
        <td>${item.unit}</td>
        <td>${item.desc}</td>
        <td>${item.cost}</td>
        <td><a href="#" class='btn btn-danger btn-sm delete">X</a></td>
        `;

		list.appendChild(row);
	}
}
// Store Class: handles storage

// Event: Add Item

document.querySelector('#book-form')
// Event: Display item
document.addEventListener("DOMContentLoaded", UI.displayItem);
