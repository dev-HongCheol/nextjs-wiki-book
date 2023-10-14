import { Badge, Button, Input } from "@components/atoms";
import { Checkbox } from "@components/molecules";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Button variant="primary">버튼</Button>
        <Button variant="secondary" className="border-4">
          버튼
        </Button>
        <Input name="" value="test" type="text" className="" hasError />
        <Badge className="bg-slate-500">배찌1111111</Badge>
        <Checkbox />
      </div>
    </main>
  );
}
