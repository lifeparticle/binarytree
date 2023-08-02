import { Card, Skeleton } from 'antd';

const EMPTY_ARRAY = [...Array(20).keys()];

const SkeletonCard = () => {
  return (
    <div>
        {
            EMPTY_ARRAY.map((value) => (
                <Card
                    key={value}
                    style={{ marginBottom: "var(--bt-size-10)" }}
                >
                    <Skeleton loading={true}></Skeleton>
                </Card>
            ))
        }
    </div>

  )
}

export default SkeletonCard