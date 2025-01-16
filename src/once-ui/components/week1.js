import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from "./week.module.scss";

const fetcher = (url) => fetch(url).then((res) => res.json());

const calculateRank = (data, isAscending = true) => {
    const sortedData = [...data].sort((a, b) =>
        isAscending ? a.record - b.record : b.record - a.record
    );

    return sortedData.reduce((acc, curr, index, arr) => {
        const rank =
            index > 0 && curr.record.toFixed(2) === arr[index - 1].record.toFixed(2)
                ? acc[acc.length - 1].rank // 공동등수
                : acc.length + 1; // 새등수

        acc.push({ ...curr, rank });
        return acc;
    }, []);
};

export default function week1() {
    const { data, error } = useSWR('/api/getRankings?sheetName=Sheet1', fetcher, { refreshInterval: 2000 });
    const [activeTable, setActiveTable] = useState(0); // 0이 빨리, 1이 멀리

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTable((prev) => (prev + 1) % 2); 
        }, 5000); // 3초보여주고 1초간 변함 총4초
        return () => clearInterval(interval);
    }, []);

    if (error) return <div className="message">기록을 불러오는 중 오류가 발생했습니다.</div>;
    if (!data) return <div className="message">기록을 불러오는 중...</div>;

    // 데이터 필터링
    const fastEvents = Array.isArray(data.data)
        ? calculateRank(
              data.data
                  .filter((row) => row.event === '빨리')
                  .map((row) => ({
                      ...row,
                      record: row.record ? parseFloat(row.record) : Infinity, // 입력 없으면 무한대
                  })),
              true // 오름차순
          ) // 상위 20등만
        : [];

    const farEvents = Array.isArray(data.data)
        ? calculateRank(
              data.data
                  .filter((row) => row.event === '멀리')
                  .map((row) => ({
                      ...row,
                      record: row.record ? parseFloat(row.record) : 0, // 입력 없으면 0
                  })),
              false // 내림차순
          ) // 상위 20등만
        : [];

    // 테이블 렌더링 함수
    const renderTable = (rows, title) => (
        <div className="table-container">
            <h1 className="sub-title">{title}</h1>
            <table>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>카트이름</th>
                        <th>생일</th>
                        <th>기록</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index} className={index < 3 ? 'top-rank' : ''}>
                            <td>{row.rank}</td> {/* 수정된 rank 사용 */}
                            <td>{row.name || 'Unknown'}</td>
                            <td>{row.birth || 'Unknown'}</td>
                            <td>
                                {row.record !== null && row.record !== undefined && row.record !== Infinity
                                    ? row.record.toFixed(2)
                                    : 'N/A'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    // 슬라이드전환설정임
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    return (
        <div className="slider-container">
            <AnimatePresence mode="wait">
                {activeTable === 0 && (
                    <motion.div
                        key="fast"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={variants}
                        transition={{ duration: 1 }} // 전환1초
                        className="motion-slide"
                    >
                        {renderTable(fastEvents, '이번주 빨리 랭킹(초)')}
                    </motion.div>
                )}
                {activeTable === 1 && (
                    <motion.div
                        key="far"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={variants}
                        transition={{ duration: 1 }}
                        className="motion-slide"
                    >
                        {renderTable(farEvents, '이번주 멀리 랭킹(cm)')}
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                .slider-container {
                    position: relative;
                    width: 100%;
                    max-width: 900px;
                    margin: auto;
                    height: auto;
                    overflow: hidden; 
                }
                .motion-slide {
                    position: absolute; 
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: auto;
                }
            `}</style>
        </div>
    );
}