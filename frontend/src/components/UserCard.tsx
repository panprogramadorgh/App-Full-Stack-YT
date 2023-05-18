import "../stylesheets/UserCard.css";

interface Props {
  name: string;
  age: number;
}

const UserCard = ({ name, age }: Props) => {
  return (
    <div className="UserCard">
      <h1 className="UserCard-title">{name}</h1>
      <h2 className="UserCard-subtitle">{age}</h2>
    </div>
  );
};

export default UserCard;
