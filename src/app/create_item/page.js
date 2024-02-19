import styles from './create_item.module.css';
import Card from '../components/card/Card';

export default function Create_Item() {

    return (
        <div className={styles.create_item_page_container}>
            <h1 className={styles.create_item_h1}>
                Create an Item
            </h1>
            <Card
                title="Item Form"
                fields={[
                    { type: "text", name: "location", name2: "Location", placeholder: "Location" },
                    { type: "text", name: "category", name2: "Category", placeholder: "Category" },
                    { type: "text", name: "item_name", name2: "Item Name", placeholder: "Item Name" },
                    { type: "text", name: "description", name2: "Description", placeholder: "Description" },
                    { type: "text", name: "unit_measure", name2: "Unit of Measure", placeholder: "Unit of Measure" },
                    { type: "text", name: "case_size", name2: "Case Size", placeholder: "Case Size" },
                    { type: "text", name: "vendor_name", name2: "Vendor Name", placeholder: "Vendor Name" },
                    { type: "text", name: "vendor_code", name2: "Vendor Code", placeholder: "Vendor Code" }
                ]}
                button_fields={[
                    { type: "submit", name: "new_item", ariaLabel: "submit_button", children: "Submit" }
                ]}
            />

        </div>
    )
}