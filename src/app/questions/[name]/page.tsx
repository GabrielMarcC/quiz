export default function Questions({ params }: { params: { name: string } }) {
  return <div>{params.name}</div>;
}
