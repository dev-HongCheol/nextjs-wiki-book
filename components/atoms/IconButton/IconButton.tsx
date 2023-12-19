import {
  Search,
  PersonOutline,
  ShoppingCart,
  CheckBoxOutlineBlank,
  CheckBox,
  Cancel,
  CloudUpload,
  Close,
  GitHub,
  Person,
} from "@mui/icons-material";
import SvgIcon from "@mui/material/SvgIcon";

export interface IconButtonProps {
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  color?: string;
  className?: string;
  backgroundColor?: string;
  size?: number;
}

/**
 * 아이콘 버튼
 */
function withIconStyle(Icon: typeof SvgIcon): React.ComponentType<IconButtonProps> {
  const IconWithStyle = (props: IconButtonProps) => {
    const { onClick, className, size = 24, color, backgroundColor } = props;

    return (
      <div
        className={`inline-block  ${onClick && "cursor-pointer"}`}
        style={{
          fontSize: `${size}px`,
          width: `${size}px`,
          height: `${size}px`,
          background: `${backgroundColor}`,
          color: `${color}`,
        }}
      >
        <Icon
          className={className}
          fontSize="inherit"
          color="inherit"
          onClick={onClick}
          style={{ display: "block" }}
        />
      </div>
    );
  };

  return IconWithStyle;
}

export const CloseIcon = withIconStyle(Close);

export const SearchIcon = withIconStyle(Search);

export const CloudUploadIcon = withIconStyle(CloudUpload);

export const CancelIcon = withIconStyle(Cancel);

export const CheckBoxOutlineBlankIcon = withIconStyle(CheckBoxOutlineBlank);

export const CheckBoxIcon = withIconStyle(CheckBox);

export const PersonIcon = withIconStyle(Person);

export const GitHubIcon = withIconStyle(GitHub);

export const PersonOutlineIcon = withIconStyle(PersonOutline);

export const ShoppingCartIcon = withIconStyle(ShoppingCart);
