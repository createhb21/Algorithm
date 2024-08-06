class Friend {
  constructor(email) {
    this.email = email;
    this.friends = [];
  }

  addFriendship(friend) {
    this.friends.push(friend);
    friend.friends.push(this);
  }

  canBeConnected(friend, visited = new Set(), depth = 0) {
    if (depth > 2) return false; // 두 다리 이상 건널 수 없도록 제한

    if (this.email === friend.email) {
      return true;
    }

    visited.add(this);

    for (const f of this.friends) {
      if (!visited.has(f) && f.canBeConnected(friend, visited, depth + 1)) {
        return true;
      }
    }

    return false;
  }
}

const a = new Friend("A");
const b = new Friend("B");
const c = new Friend("C");
const d = new Friend("D");

a.addFriendship(b);
b.addFriendship(c);
c.addFriendship(d);

console.log(a.canBeConnected(c)); // true, 한 다리 건너 연결 가능
console.log(a.canBeConnected(d)); // false, 두 다리 건너 연결 불가능
