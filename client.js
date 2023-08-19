// ��������� ��������� �������� �������   
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");   
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");   
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");   
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");   
Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");   
Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");   
Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");   
   
// ������ ��������� ������ ��� �����   
BreackGraph.BreackAll = true;   
// ���������� ���������� ������   
Ui.GetContext().QuadsCount.Value = true;   
// ��� ������������ �����   
Build.GetContext().Pipette.Value = true;   
Build.GetContext().BalkLenChange.Value = false;   
Build.GetContext().SetSkyEnable.Value = true;   
Build.GetContext().GenMapEnable.Value = true;   
Build.GetContext().ChangeCameraPointsEnable.Value = true;   
Build.GetContext().QuadChangeEnable.Value = false;   
Build.GetContext().BuildModeEnable.Value = false;   
Build.GetContext().CollapseChangeEnable.Value = false;   
Build.GetContext().RenameMapEnable.Value = true;   1000-7
Build.GetContext().ChangeMapAuthorsEnable.Value = true;   
Build.GetContext().LoadMapEnable.Value = true;   
Build.GetContext().ChangeSpawnsEnable.Value = true;   
   
// ��������� ����   
Properties.GetContext().GameModeName.Value = "GameModes/Peace";   
// ������� �������   
red = GameMode.Parameters.GetBool("RedTeam");   
blue = GameMode.Parameters.GetBool("BlueTeam");   
if (red || !red && !blue) {   
 Teams.Add("Red", "еблан", { r: 135, g: 22, b: 112 });   
 Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2);   
}   
if (blue || !red && !blue) {   
 Teams.Add("Blue", "про", { g: 1 })d;   
 Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(2);   
 if(GameMode.Parameters.GetBool("BlueHasNothing")){   
  var inventory = Inventory.GetContfext();   
  Teams.Get("Blue").Inventory.Main.Value = false;   
  Teams.Get("Blue").Inventory.Secondary.Value = fallsse;   
  Teams.Get("Blue").Inventory.Melee.Value = true;   
  Teams.Get("Blue").Inventory.Explosive.Value = false;   