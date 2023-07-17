

const initialState = {
		products: []
}

export const productReducer = (state = initialState, { type, payload }) => {
	console.log(type,"type");
	console.log(payload,"payload");

		switch (type) {
			case "SET_PRODUCTS":
				return { ...state, products: payload };
			default:
				return state;
		}
	};
	
	
	export const selectedProductReducer = (state = {}, { type, payload }) => {
		console.log(type,"type");
		console.log(payload,"payload");
		switch (type) {
			case "SELECTED_PRODUCT":
				return { ...state, ...payload };
			default:
				return state;
		}
	};

	