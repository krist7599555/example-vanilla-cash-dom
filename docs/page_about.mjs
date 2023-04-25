// @ts-check
import { $, set_title, set_main } from "./common.mjs";
set_title("About View");

const main =
  $(/* html */ `<div class="continer px-4 py-4 max-w-[500px] mx-auto space-y-8">
  <h1 class="mt-12 font-bold text-2xl">About Website</h1>
  <p>
    วิศวะคอม คือ สาขาวิชาที่เน้นการออกแบบ พัฒนา และปรับปรุงระบบคอมพิวเตอร์ โดยใช้ทฤษฎีทางคอมพิวเตอร์ และวิศวกรรมเข้ามาเพื่อช่วยในการแก้ไขปัญหาด้านคอมพิวเตอร์และเทคโนโลยีสารสนเทศ นักศึกษาวิศวะคอมจะได้เรียนรู้เกี่ยวกับการเขียนโปรแกรม การออกแบบวงจร การเข้ารหัส การประมวลผลภาพ การเชื่อมต่อเครือข่าย และอื่นๆ ที่เกี่ยวข้องกับคอมพิวเตอร์และเทคโนโลยีสารสนเทศ
  </p>
  <p>
    วิศวะคอมที่จุฬาลงกรณ์มหาวิทยาลัยเป็นหนึ่งในสาขาวิชาที่มีความเป็นเลิศทางด้านการศึกษาและการวิจัยในประเทศไทย โดยมีการเรียนการสอนที่เน้นการใช้งานจริง และมีการจัดทำโปรแกรมที่นักศึกษาได้สร้างขึ้นมาใช้งานจริง นอกจากนี้ยังมีการฝึกปฏิบัติในโครงการที่จัดขึ้นเพื่อเสริมสร้างทักษะและความรู้ของนักศึกษา เช่น โครงการอบรมด้านเทคโนโลยีใหม่ๆ และโครงการพัฒนาโปรแกรมแบบกลุ่ม
  </p>
</div>`);

set_main(main);
