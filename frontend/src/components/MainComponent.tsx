import { useState } from "react";

const Icon = ({ name }: { name: string }) => {
    return (
        <img
            src={`http://localhost:3001/icon/${name}`} 
            alt={name}
            className="w-12 h-12"
        />
    );
};

const Icons = () => {
    const [icons] = useState(["Arduino", "Astro", "AWS-Light", "Ansible"]);

    return (
        <div className="flex gap-4">
            {icons.map((icon) => (
                <Icon key={icon} name={icon} />
            ))}
        </div>
    );
};

export default Icons;
