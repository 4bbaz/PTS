import PropTypes from "prop-types";
import Button from "./Button";
import style from "./warning.module.scss";
import { motion, AnimatePresence } from "framer-motion";

export default function Warning({ onBackEdit }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <div className={style.warning_box}>
          <h3>Are you sure to Save this details?</h3>
          <div className={style.btns}>
            <Button type="submit" name="Yes" size="normal" />
            <Button name="No" size="normal" click={onBackEdit} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

Warning.propTypes = {
  onBackEdit: PropTypes.func.isRequired,
};
