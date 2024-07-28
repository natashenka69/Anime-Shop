export type CartItems = {
    image: string, 
    amount: number, 
    price: number, 
    title: string, 
    id: number
}

export type FigureData = {
    id: string;
    title: string;
    category: string;
    company: string;
    image: string;
    bottomimage: string;
    slider: string[];
    price: string;
    release?: string;
    size: string;
    material: string;
  }

  
export type CardComponents = {
    title: string,
    image: string,
    price: string,
    category: string,
    company: string,
  }

export type PopUpFunctions = {
    onClose: () => void
  }
  