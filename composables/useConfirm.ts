import { openDialog } from 'vue3-promise-dialog';
import ConfirmDialog from '@/components/ConfirmDialog.vue';

/**
 * OK/キャンセルを確認するメッセージボックスを表示します。
 * @param message 表示するメッセージ
 * @param title メッセージボックスのタイトル。省略時は"確認"となります。
 * @returns OKが押された場合trueを返すPromise<boolean>オブジェクトを返します。
 */
const confirm = async (message: string, title="確認") => {
  return await openDialog(ConfirmDialog, {isOpen:true, message, title});
}

/**
 * メッセージボックス関数
 *  https://github.com/rlemaigre/vue3-promise-dialog
 * @returns 
 */
export const useConfirm = () => {
  return {
    confirm
  }
}