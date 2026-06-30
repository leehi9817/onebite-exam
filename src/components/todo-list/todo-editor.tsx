import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TodoEditor() {
  return (
    <div className="flex gap-2">
      <Input placeholder="새로운 할 일을 입력하세요 ..." />
      <Button>추가</Button>
    </div>
  );
}
